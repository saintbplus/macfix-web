# Macfix-web -- development

## Features

### Main feature - customer request for a service.

step of service request.
\*\*required customer login.

1. customer problem report.
2. customer agree on term condition.
3. customer waiting for provider to reply.
   3.1 notify on iphone when worker replied.
4. confirm or cancel.
   4.1 choose to sent device to site by delivery, or self delivery.
5. customer can view progress.
   5.1 notify on iphone when work done.
6. request for delivery service or self pick up on site.
7. rate experince on service.

detail on each step.

- step 1 Inputs fields:

  - detail
  - device
  - images 3 max

- step 3

  - customer can cancel request on this.
  - customer can start chating with admin on this step.

- step 4

  - button to lalamove app on iphone.

- step 5 progress stages

  - waiting for device to arrive.
  - start fixing.
  - done & waiting for customer response
  - done

### App navigation

- from home page
  - to new request/ continue request (if previous not confirmed or cancel).
  - to current service status
  - to services list (include past services)

## Pages

Pages can divided into features. This readme will divided into 2 category.
Header pages and their sub pages.

- header pages

  - these are the main page of the features
  - the home page and the feed page
  - the first pages user visited when click on the main navigation

- sub pages

  - pages that follow up after customer interact on the features.

### Pages on navigation

- The Home page

  - The start of the application when customer is not logged in.

- The Feed page (link on header logo)

  - The page that user seen when logged in.
  - contains informations of current order, past order, notification, and shop info(contact, location).

- The Request Page (link on nav)

  - The page of main feature, where customer request their services.

- The order list page

  - list of services that customer on order on
  - list order from newest to old (eg. last 30 order)

- The status page

  - mark order to view progress.
  - mark current order for progress, if no mark.
  - can mark from order list.
  - mark only undone order.
