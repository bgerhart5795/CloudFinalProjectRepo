Project Description

This website is a mock social media website loosely based off of myspace, but with the goal of not being able to connect with anyone. 

This website contains 3 pages:

Homepage:
https://finalproject-gerhart.s3.amazonaws.com/homepage.html

	This page is the main page of the website. It displays a logo, a navigation bar, the creators profile, a featured profiles section, and a text box with a header. 
	The featured profiles section calls the AWS Lambda function ReadProfile and has a function to call 6 random profiles. 

Show Profiles:
https://finalproject-gerhart.s3.amazonaws.com/allprofiles.html
	
	This page shows all the profiles in the DynamoDB using the lambda function ReadProfile. It shows each profile's picture, name, age, motto, and music, if available.

Create Profile: 
https://finalproject-gerhart.s3.amazonaws.com/createprofile.html
	
	This page allows the user to create a profile using an html form. It allows entry of an image, name, age, motto, and music. 
	The submit button calls the lambda function WriteProfile and submits the form data to the DynamoDB. 