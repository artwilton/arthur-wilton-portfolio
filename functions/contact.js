// import mailChannelsPlugin from "@cloudflare/pages-plugin-mailchannels";
import staticFormsPlugin from "@cloudflare/pages-plugin-static-forms";

// export const onRequest = staticFormsPlugin({
//   respondWith: ({ request }) => {
//     console.log("[LOGGING FROM /contact]", request);
//     return await handlePost(request);
//   },
// });

export const onRequest = staticFormsPlugin({
    respondWith: ({ formData, name }) => {
      console.log("[LOGGING FROM /contact]");
      const email = formData.get('email')
      return new Response(`Hello, ${email}! Thank you for submitting the ${name} form.`)
    }
  });
  

// export async function onRequest(context) {
//   const { request }  = context;
//   console.log(`[LOGGING FROM /contact]: Request came from ${request.url}`);

//   return await handlePost(request);
// }


// export const onRequest = ({ request, env }) => {
//   const SECRET_KEY = env.TURNSTILE_SECRET_KEY;

//   mailChannelsPlugin({
//   personalizations: [
//     {
//       to: [{ name: "Contact Form", email: "" }],
//     },
//   ],
//   from: {
//     name: "Arthur Portfolio",
//     email: "",
//   },
//   respondWith: async () => {
//     return await handlePost(request, SECRET_KEY);
//   },
// });
// };
