import mailChannelsPlugin from "@cloudflare/pages-plugin-mailchannels";

async function handlePost(request, SECRET_KEY) {
  const body = await request.formData();
  // Turnstile injects a token in "cf-turnstile-response".
  const token = body.get('cf-turnstile-response');
  const ip = request.headers.get('CF-Connecting-IP');

  // Validate the token by calling the "/siteverify" API.
  let formData = new FormData();
  formData.append('secret', SECRET_KEY);
  formData.append('response', token);
  formData.append('remoteip', ip);

  const result = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      body: formData,
      method: 'POST',
  });

  const outcome = await result.json();
  if (!outcome.success) {
      return new Response('The provided Turnstile token was not valid! \n' + JSON.stringify(outcome));
  }

  return new Response('Turnstile token successfuly validated. \n' + JSON.stringify(outcome));
}

export const onRequest = ({ request, env }) => {
  const SECRET_KEY = env.TURNSTILE_SECRET_KEY;

  mailChannelsPlugin({
  personalizations: [
    {
      to: [{ name: "ACME Support", email: "support@example.com" }],
    },
  ],
  from: {
    name: "ACME Support",
    email: "support@example.com",
  },
  respondWith: async () => {
    return await handlePost(request, SECRET_KEY);
  },
});
};