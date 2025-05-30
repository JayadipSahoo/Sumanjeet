# EmailJS Setup Guide for Your Portfolio

This guide will help you set up EmailJS to handle form submissions from your contact form.

## Step 1: Create an EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/) and sign up for an account (they have a free tier)
2. Log in to your account

## Step 2: Connect an Email Service

1. In your EmailJS dashboard, go to "Email Services" 
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email account
5. Once connected, note down the **Service ID** (you'll need this later)

## Step 3: Create an Email Template

1. In your EmailJS dashboard, go to "Email Templates"
2. Click "Create New Template"
3. Design your email template with the following structure:

```
Subject: {{subject}} - Message from {{user_name}}

Name: {{user_name}}
Email: {{user_email}}
Subject: {{subject}}

Message:
{{message}}
```

4. Make sure to use the exact variables shown above (`user_name`, `user_email`, `subject`, `message`) as these match your form
5. Save the template and note down the **Template ID**

## Step 4: Update Your Code

1. In your `Contact.jsx` file, update these lines with your actual IDs:

```javascript
const serviceId = 'service_xxxxxxx'; // Replace with your EmailJS service ID
const templateId = 'template_xxxxxxx'; // Replace with your EmailJS template ID
const userId = 'xxxxxxxxxxxxxxxx'; // Replace with your EmailJS user ID (Public Key)
```

2. Your user ID is your EmailJS Public Key, which you can find in your EmailJS dashboard under "Account" > "API Keys"

## Testing Your Form

1. After updating the IDs, your contact form should now send emails when submitted
2. Fill out the form with test data and submit it
3. Check the email account you connected to EmailJS to see if you received the test message

## Troubleshooting

If you're having issues:
1. Check the browser console for any errors
2. Verify that all IDs are correctly entered
3. Make sure your EmailJS account is active and not exceeding the free tier limits
4. Ensure your email service connection is working properly

## Email Template Preview

Here's how your email template should look:

```
From: Your Portfolio Contact Form <your-connected-email@example.com>
To: your-email@example.com
Subject: {{subject}} - Message from {{user_name}}

You have received a new message from your portfolio website:

Name: {{user_name}}
Email: {{user_email}}
Subject: {{subject}}

Message:
{{message}}

---
This email was sent from your portfolio website contact form.
``` 