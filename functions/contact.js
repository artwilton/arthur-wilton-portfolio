import staticFormsPlugin from "@cloudflare/pages-plugin-static-forms";
const DEMO_SECRET_KEY = "1x0000000000000000000000000000000AA";

const handlePost = async (request) => {
  const body = await request.formData();
  // Turnstile injects a token in "cf-turnstile-response".
  const token = body.get("cf-turnstile-response");
  const ip = request.headers.get("CF-Connecting-IP");

  // Validate the token by calling the "/siteverify" API.
  let formData = new FormData();
  formData.append("secret", DEMO_SECRET_KEY);
  formData.append("response", token);
  formData.append("remoteip", ip);

  const result = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      body: formData,
      method: "POST",
    }
  );

  const outcome = await result.json();
  if (!outcome.success) {
    return new Response(
      "The provided Turnstile token was not valid! \n" + JSON.stringify(outcome)
    );
  }

  console.log("MIDDLEWARE");

  return (
    staticFormsPlugin({
        respondWith: ({ formData, name }) => {
          const email = formData.get('email')
          return new Response(`Hello, ${email}! Thank you for submitting the ${name} form.`)
        }
      })    
  );

//   return new Response(
//     "Turnstile token successfuly validated. \n" + JSON.stringify(outcome)
//   );
}

export const onRequestPost = async ({ request, env }) => {
  console.log(`NODE VERSION: ${env.NODE_VERSION}`);
  return await handlePost(request);
};