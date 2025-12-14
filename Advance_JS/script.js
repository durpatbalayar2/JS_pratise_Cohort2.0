//cenario 2 — Bulk Email Sending Simulation with Parallel Promises and Error Handling

// Simulate sending bulk emails to 5 users. Treat each email-sending operation as a `Promise` (simulate delays with `setTimeout`).

// ### Requirements

// - Send all emails in parallel using `Promise.all`.
// - If any email fails (e.g., due to a simulated random failure), catch the error and clearly indicate which specific email failed.
// - Use a `finally` block to display a message indicating that the "Email process is complete." (regardless of success/failure).

// ### Suggested tasks

// - Create an array of 5 mock email tasks that resolve or reject based on a random condition.
// - Call `Promise.all` and handle success and failure cases. Show a breakdown of which emails succeeded and which failed.
// - Ensure the `finally` block runs to update the UI or console indicating completion.

let users = ["ram@gmail.com", "sita@gmail.com", "lovkush@gmail.com"];

function sendEmail(email) {
  return new Promise((res, rej) => {
    let time = Math.floor(Math.random() * 5);

    setTimeout(() => {
      let prob = Math.floor(Math.random() * 10);

      if (prob <= 5) res("Email send successfully");
      else rej("Email has been rejected");
    }, time * 1000);
  });
}

async function sendEmails(userlist) {
  let allresponses = userlist.map(function (email) {
    return sendEmail(email)
      .then(function (data) {
        return data;
      })

      .catch(function (err) {
        return err;
      });
  });

  let ans = await Promise.all(allresponses);
  ans.forEach(function (status) {
    console.log(status);
  });
}

sendEmails(users);
