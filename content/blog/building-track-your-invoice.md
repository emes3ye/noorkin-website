---
title: "Building Track Your Invoice: How We Designed an Invoicing Tool That Chases Payments for You"
slug: "building-track-your-invoice"
excerpt: "The Noorkin team developed Track Your Invoice to handle the full life of an invoice and to follow up on overdue payments automatically. Here is how we approached the invoice lifecycle, payment state, and reminder design."
publishedDate: "2026-06-20"
author: "Noorkin Team"
---

[Track Your Invoice](https://trackyourinvoice.com/) is an invoicing and payment tracking tool for freelancers and small teams. It manages the full life of an invoice, from drafting and sending through to recording payment, and it can send overdue reminders on a schedule so that following up does not depend on anyone remembering to do it. Track Your Invoice was developed by the Noorkin team.

This article is not advice on how to chase late payments. The product's own blog already covers that, including a practical [guide to tracking unpaid invoices](https://trackyourinvoice.com/blog/how-to-track-unpaid-invoices-as-a-freelancer). What follows is the development story. It explains why Noorkin chose to build the product, the reasoning behind its invoice lifecycle, how payment state is kept accurate when money can arrive in more than one way, and how the reminder system was designed to stay courteous while still being persistent.

The emphasis throughout is on engineering and product decisions. We have kept it to the parts that are genuinely interesting to anyone who builds software or runs a small business, and we have left out the implementation details that would not help a reader.

## At a glance

- Track Your Invoice manages invoices from draft to paid, with an explicit status for every stage of that journey.
- Payment can be recorded through Stripe checkout, entered manually, or applied as a partial payment.
- Automated reminders escalate in tone on a configurable schedule, and every reminder is logged.
- The product supports growing teams through multi-tenant separation and role-based access.
- It was developed by the Noorkin team.

## Why unpaid invoices were a problem worth solving

Sending an invoice is the easy part. The difficult part is everything that happens afterward. A freelancer or a small team sends the invoice, then waits, then wonders whether the client saw it, then has to decide when and how to follow up without sounding impatient. That follow-up is unpaid, unstructured work, and it usually lands on the person who is least comfortable doing it.

We saw three recurring sources of friction. The first is manual follow-up. Reminders only get sent when someone remembers, which means they get sent late or not at all. The second is scattered payment records. When a payment arrives by card, another by bank transfer, and a third as a deposit before the rest of the balance, the true state of an invoice lives across several places and someone has to reconcile it by hand. The third is tone. Asking to be paid is awkward, and the wording of a reminder gets harder to judge the more overdue an invoice becomes.

Noorkin developed Track Your Invoice to take this work off the person and put it into the system. The goal was not to remove judgement from the process but to make the default behaviour reliable, so that a sensible follow-up happens on time even on a busy week.

## What we decided to build

### A clear invoice lifecycle

The first decision was to make the state of every invoice explicit. Rather than treating an invoice as simply paid or not paid, Track Your Invoice models the stages an invoice actually moves through. The invoice statuses are Draft, Sent, Viewed, Partially Paid, Paid, Overdue, Cancelled, and Written Off.

Explicit statuses matter for a practical reason. Almost every other behaviour in the product depends on knowing exactly where an invoice stands. A reminder should only consider invoices that are sent and overdue, not drafts and not invoices already settled. A dashboard is only useful if it can separate what is outstanding from what is overdue from what is done. By giving each stage its own status, and by calculating due dates from the invoice's payment terms, the product has a dependable foundation that the rest of the system can build on.

### More than one way to record payment

The second decision was that payment state could not assume money always arrives the same way. Track Your Invoice supports Stripe checkout for clients who want to pay by card online, manual payment recording for money that arrives outside the platform such as a bank transfer, and partial payments for situations where a client pays part of a balance now and the rest later.

The Partially Paid status exists precisely because real payment is rarely all or nothing. An invoice can be genuinely half settled, and the product needs to represent that honestly rather than rounding it to paid or unpaid. Keeping these paths first class, instead of treating card payment as the only real one, is what lets the recorded balance match what actually happened.

### A public invoice experience

Clients should not need an account to view or pay an invoice. Track Your Invoice creates a public invoice link that a client can open directly, and it tracks when an invoice is viewed, which is what moves an invoice into the Viewed status.

We were careful not to overstate what this gives you. A view is a useful signal that the invoice reached someone and was opened, and that can inform when a reminder is worth sending. It is not proof of intent to pay, and we designed the surrounding behaviour with that in mind.

## Automating reminders without losing the human tone

### A gradual reminder schedule

The reminder engine is the part of the product that does the chasing. Its job is to scan for overdue invoices and send reminders based on a configured schedule. The default schedule escalates in three steps: a soft reminder at Day 3, a medium reminder at Day 7, and a firm reminder at Day 14, where the day count is measured from how overdue the invoice is.

The escalation is deliberate. A message that is appropriate three days after a due date is not the right message after two weeks, and a message strong enough for two weeks would be jarring three days in. By mapping each stage to a tone, the product can stay polite early and become more direct over time, which is closer to how a thoughtful person would actually follow up.

### Keeping users in control

Automation should assist a person, not act on its own without limits. The default schedule is a starting point, not a fixed rule. Track Your Invoice allows the reminder schedule to be configured per company, and reminders can be switched on or off through company settings, so a team can match the cadence to their relationships and their industry.

Alongside the automated schedule, a user can send a manual reminder when a situation calls for a personal nudge. Every reminder, automated or manual, is recorded in a reminder log. That log keeps a clear history of what was sent and when, which matters both for the sender's peace of mind and for any conversation with a client about what communication has already gone out.

## Engineering reliable payment state

### Stripe webhook reconciliation

When a client pays through Stripe, the payment does not complete inside the application the moment the client clicks pay. Stripe processes the payment and then notifies the application separately. Track Your Invoice handles this by listening for Stripe webhook events and updating the invoice based on what Stripe confirms, rather than assuming the payment succeeded because a checkout session was opened.

This reconciliation step is the difference between an invoice that looks paid and an invoice that is paid. Treating the webhook as the source of truth for online payments keeps the recorded state aligned with what actually settled, which is exactly the kind of correctness an invoicing tool cannot get wrong.

### Manual and partial payments

Payment state cannot depend on Stripe alone, because a lot of real money never touches Stripe. A client pays by bank transfer, hands over a deposit, or settles an invoice through a method the platform never sees. If the product only believed Stripe, those payments would be invisible and the balances would be wrong.

This is why manual payment recording and partial payments are part of the core model rather than an afterthought. A recorded payment, whether it came from a Stripe webhook or was entered by hand, moves an invoice toward Partially Paid or Paid based on how much of the balance it covers. Designing payment state to accept money from more than one direction is what keeps the numbers trustworthy.

## Designing for teams and growing businesses

A tool that only works for a single freelancer stops being useful the moment that freelancer hires someone or starts managing more clients. Track Your Invoice was built with that growth in mind, without turning into a heavy accounting suite.

Companies are separated through multi-tenant isolation, so each business only ever works with its own data. Within a company, role-based access control assigns different permissions to different roles, which keeps sensitive actions appropriate to the person performing them. Around the invoicing core sit the features a working business actually needs: client management with a way to flag clients who pay late, recurring invoices for work that repeats, expense management with receipt capture through OCR and an approval step, reporting and analytics for a clearer view of the numbers, and an optional QuickBooks integration for teams that keep their books there. These exist to support the real workflow, not to lengthen a feature list.

## What we learned while developing Track Your Invoice

A few lessons stand out from building the product.

Automating communication is a responsibility, not just a convenience. Because reminders go out on their own, the tone and timing have to be right by default, and the user has to stay able to adjust or override them. Getting that balance right mattered more than adding more automation.

Status workflows are worth the upfront effort. Modelling explicit invoice statuses felt like overhead early on, but almost every later feature, from reminders to dashboards to reports, became simpler because the state was already clear.

Payment state is more complex than it first appears. Supporting Stripe, manual entry, and partial payments meant accepting that an invoice's balance is the result of several possible inputs, and designing for that honestly is what keeps the data correct.

Keeping the interface understandable is a constant constraint. Each capability had to earn its place so the product stayed approachable for someone who just wants to send an invoice and get paid, not study a manual.

Building around a real workflow keeps the product grounded. The features that survived are the ones that map to something a freelancer or small team actually does, which is a useful filter for deciding what to build next.

## Where Track Your Invoice goes from here

The direction is steady rather than dramatic. The product keeps the same focus it started with: helping people get paid for work they have already done, with less manual chasing and clearer records. Future work continues to serve that focus rather than chase scope for its own sake.

If you want to see how these ideas come together in practice, [Explore Track Your Invoice](https://trackyourinvoice.com/) and look at how the lifecycle and reminders work end to end. And if your team is weighing up building a product like this, the [Noorkin services](https://noorkin.dev/services) page explains how we approach software development, or you can [get in touch with Noorkin](https://noorkin.dev/contact) to talk it through.
