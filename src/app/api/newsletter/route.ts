export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    
    if (!email) {
      return Response.json({ error: "Email required" }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json({ error: "Invalid email format" }, { status: 400 });
    }

    // TODO: Integrate with Mailchimp or similar newsletter service
    // For now, this is a stub that logs the subscription
    console.log(`Newsletter subscription: ${email}`);
    
    // In production, you would add something like:
    // const mailchimp = new MailchimpAPI(process.env.MAILCHIMP_API_KEY);
    // await mailchimp.lists.addListMember(process.env.MAILCHIMP_LIST_ID, { email_address: email });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return Response.json({ error: "Failed to subscribe" }, { status: 500 });
  }
}


