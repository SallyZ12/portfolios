# README

Welcome to the Portfolios Application.

This is an application to display portfolios of municpal bonds by Company (user) based on the Transactions associated with each Credit by Company.  A Company/Credit pairing is referred to as an Exposure.

To use this app:

1. clone portfolios from Github
2. change directory (cd) into the directory portfolios,
3. run bundle install,
4. run rake db:migrate
5. If you choose to delete the database and start fresh run rake db:reset and then rake db:migrate.

Overview:

This app allows a Company to maintain a list of credits in their portfolio with their associated transactions(s).
A Credit can belong to many Companies and a Company can belong to many Credits.
A Company/Credit pairing is defined as an Exposure.
A Transaction is unique to an Exposure meaning Transaction 1 can only belong to Exposure 1 (Company 1/Credit 1).
A Credit can not be deleted.  
An Exposure can only be deleted if no Transactions are associated with it.
An Exposure can only be edited/deleted by the Company for which it is associated with.
A Transaction can only be edited/deleted by the Company for which it is associated with.
You will be able to see the top 5 Transactions by Par.
You will be able to select all Credits in a specific State regardless of Company.

Instructions:
1. Register and if previously registered Log In.  You many also Log In using your Github credentials.
2. Once registered/logged in you are taking to your Company page where you can Edit your information.
3. From the Company Page you have access to a variety of links -- the first thing you want to do is add a credit to your by selecting the link "Select An Existing Credit or Create A New Credit".
4. If you do not have any credits in your Portfolio then you will enter the information required for a new Credit.





This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
