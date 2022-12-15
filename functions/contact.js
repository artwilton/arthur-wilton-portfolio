const DEMO_SECRET_KEY = "1x0000000000000000000000000000000AA";

const handlePost = async (request, env) => {
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

  return await sendEmail(env);

//   return new Response(
//     "Turnstile token successfuly validated. \n" + JSON.stringify(outcome)
//   );
}

const sendEmail = async (env) => {

    console.log(`EMAIL ADDRESS: ${env.EMAIL_ADDRESS}`);

    let send_request = new Request("https://api.mailchannels.net/tx/v1/send", {
        "method": "POST",
        "headers": {
            "content-type": "application/json",
        },
        "body": JSON.stringify({
            "personalizations": [{ 
                "to": [ {"email": `${env.EMAIL_ADDRESS}`,
                          "name": "Test Recipient"}],
            }],
            "from": {
                "email": `${env.EMAIL_ADDRESS}`,
                "name": "Test Sender",
            },
    
            "subject": "Test Subject",
            "content": [{
                "type": "text/plain",
                "value": "Test message content",
            }],
        }),
    });

    const resp = await fetch(send_request);
    const respText = await resp.text();

    return new Response(resp.status + " " + resp.statusText + "\n\n" + respText);
}


export const onRequestPost = async ({ request, env }) => {
  console.log(`NODE VERSION: ${env.NODE_VERSION}`);
  return await handlePost(request, env);
};