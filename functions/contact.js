const handlePost = async (request, env) => {
  const SECRET_KEY = env.TURNSTILE_SECRET_KEY
  const body = await request.formData();
  // Turnstile injects a token in "cf-turnstile-response".
  const token = body.get("cf-turnstile-response");
  const ip = request.headers.get("CF-Connecting-IP");
  const { name, emailFrom, subject, message } = parseUserForm(body);

  // Validate the token by calling the "/siteverify" API.
  let formData = new FormData();
  formData.append("secret", SECRET_KEY);
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
      JSON.stringify({
        errors: ["The provided Turnstile token was not valid!"],
      }),
      {
        status: 400,
        statusText: "The provided Turnstile token was not valid!",
        headers: { "Content-Type": "application/json" },
      }
    );
  }
  // log form data
  // for (const pair of body.entries()) {
  //   console.log(`${pair[0]}, ${pair[1]}`);
  // }

  return await sendEmail(env.EMAIL_ADDRESS, name, emailFrom, subject, message);
};

const parseUserForm = (userFormData) => {
  const name = userFormData.get("name");
  const emailFrom = userFormData.get("email");
  const subject = userFormData.get("subject");
  let message = userFormData.get("message");
  message = `From: ${emailFrom} \nMessage: ${message}`
  
  return { name, emailFrom, subject, message };
};

const sendEmail = async (email, name, subject, message) => {

  let send_request = new Request(
    "https://api.mailchannels.net/tx/v1/send",
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: `${email}`}],
          },
        ],
        from: {
          email: `${email}`,
          name: name,
        },
        subject: subject,
        content: [
          {
            type: "text/plain",
            value: message,
          },
        ],
      }),
    }
  );

  return await fetch(send_request);
};

export const onRequestPost = async ({ request, env }) => {
  return await handlePost(request, env);
};