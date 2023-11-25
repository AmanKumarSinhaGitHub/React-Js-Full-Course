# Resume Builder

Task 1: Create a simple static React app for a Resume Builder. The app should consist of components for Resume, Skills, Education, and Experience, with data provided through a JavaScript object.

```js
const details = {
  name: "Aman Kumar Sinha",
  experience: [
    {
      year: 2023,
      company: "xyz",
      role: "Frontend Developer",
    },

    {
      year: 2022,
      company: "abc",
      role: "Backend Developer",
    },
  ],
  education: [
    {
      year: 2020,
      college: "Sahyogi High School",
    },

    {
      year: 2023,
      college: "R.N. College",
    },
  ],
  skills: ["react js", "node js", "express", "mongodb"],
};
```

--- 
Task 2 : This is continuation of previous assignment RESUME Builder

- In this part you have to make some conditional rendering. Suppose if any section doesn't exist you have to remove that section from Resume. Example if skills is empty array than don't display skills section in Resume.

- You have to use map in most places where there are arrays. Like Skills, Education, Experience if there are 3 entries, ```use map``` to display 3 experience items. You don't need fix number of items. Any array can have 1 to 10 (or some Limit) any number of items. You can put some Limit, so that your layout is not affected.

- Conditionally put some styling to Resume. Like ```light theme or dark theme``` or any other way you can switch the CSS layouts.

Task 3:  Add a print button to print the current resume.
You can use a DOM method ```window.print``` to print the PDF.

--- 

Task 4: This is continuation of previous assignment ```RESUME Builder```. 

Now you have to make a separate component ```ResumeEditor``` which has a ```FORM```. This form will have many ```input boxes```. Each one related to one section. For example you can have one input box or ```experience``` section. Another input box for ```skill``` section and like this. Every input box should have an ```Add``` button in front of it. Once you press this add button that information is stored in the state , which you can update at top of the App level. Now this state should update the ```Resume``` Component and its child you have built.

- first component will be your ```RESUME``` document which is only for reading purpose.

- second component will be this ```FORM```

- you have to manage the state in between

- only Add functionality is required in this assignment

- you can change input boxes according to your need depending on your format of Resume. You can have multiple textboxes also for same section. Like for date + experience item etc.

