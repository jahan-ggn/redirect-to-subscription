# Subscription Redirect Theme Component

This Discourse theme component automatically redirects users who are not members of specified subscription groups to a subscription page.

## Features

- Redirects non-subscribed users to the subscription page.
- Prevents redirection for admins.
- Checks user group membership against specified subscription groups.

## Installation

1. Navigate to your Discourse **Admin Panel**.
2. Go to **Appearance > Components**.
3. Click on **Install** and choose **From a Git repository**.
4. Enter the GitHub repository URL for this theme component.
5. Click **Install** and enable the component for your desired themes.

## Configuration

After installation, configure the component settings:

1. Go to **Admin Panel > Components > subscription-redirect**.
2. Under **Settings**, find `subscription_groups`.
3. Specify the subscription group names that have subscription-based access.