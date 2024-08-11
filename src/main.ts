// Define the discriminated union
type Notification =
  | { type: "email"; from: string; to: string; subject: string; body: string }
  | { type: "sms"; from: string; to: string; message: string }
  | { type: "push"; deviceToken: string; title: string; message: string };

// Function that handles notifications
function sendNotification(notification: Notification) {
  switch (notification.type) {
    case "email":
      console.log(
        `Sending email to ${notification.to}: ${notification.subject}`
      );
      console.log(notification.from);
      break;
    case "sms":
      console.log(`Sending SMS to ${notification.to}: ${notification.message}`);
      break;
    case "push":
      console.log(
        `Sending push notification to ${notification.deviceToken}: ${notification.title}`
      );
      break;
    default:
      // This should never happen if all cases are covered
      const _exhaustiveCheck: never = notification;
      console.log(_exhaustiveCheck);
  }
}

// Example usage
sendNotification({
  type: "email",
  from: "noreply@example.com",
  to: "user@example.com",
  subject: "Hello!",
  body: "Welcome!",
});
sendNotification({
  type: "sms",
  from: "12345",
  to: "67890",
  message: "Your code is 1234",
});
sendNotification({
  type: "push",
  deviceToken: "abcd1234",
  title: "New Message",
  message: "You have a new message!",
});
