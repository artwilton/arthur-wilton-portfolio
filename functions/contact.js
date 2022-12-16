const DEMO_SECRET_KEY = "1x0000000000000000000000000000000AA";

const handlePost = async (request, env) => {
  const body = await request.formData();
  // Turnstile injects a token in "cf-turnstile-response".
  const token = body.get("cf-turnstile-response");
  const ip = request.headers.get("CF-Connecting-IP");
  const { name, emailFrom, subject, message } = parseUserForm(body);

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
      JSON.stringify({
        success: false,
        errors: [
          {
            status: 400,
            detail: "The provided Turnstile token was not valid!",
          },
        ],
      }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
  // log form data
  for (const pair of body.entries()) {
    console.log(`${pair[0]}, ${pair[1]}`);
  }

  return await sendEmail(env.EMAIL_ADDRESS, name, emailFrom, subject, message);

  // return new Response(
  //   JSON.stringify({
  //     success: true,
  //   }),
  //   {
  //     status: 200,
  //     statusText: "Turnstile token successfuly validated.",
  //     headers: { "Content-Type": "application/json" },
  //   }
  // );
};

const parseUserForm = (userFormData) => {
  const name = userFormData.get("name");
  const emailFrom = userFormData.get("email");
  const subject = userFormData.get("subject");
  const message = userFormData.get("message");

  return { name, emailFrom, subject, message };
};

const sendEmail = async (emailTo, name, emailFrom, subject, message) => {
  console.log('SEND EMAIL', emailTo, name, emailFrom, subject, message);

  let send_request = new Request("https://api.mailchannels.net/tx/v1/send?dry-run=true", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [{ email: `${emailTo}`, name: name }],
        },
      ],
      from: {
        email: `${emailFrom}`,
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
  });

  const resp = await fetch(send_request);
  // const respText = await resp.text();

  // return new Response(resp.status + " " + resp.statusText + "\n\n" + respText);
  return resp;
};

export const onRequestPost = async ({ request, env }) => {
  console.log(`NODE VERSION: ${env.NODE_VERSION}`);
  return await handlePost(request, env);
};
