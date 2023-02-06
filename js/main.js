const topic = document.querySelector(".topic");
const count = document.querySelector(".count");
const success = document.querySelector(".success");
const dance = document.querySelector(".dance");
const learning ={
    topic: "JS",
    learningGoals: ["Build JS program","Build a website","Manage my own business","Financing"],
    category: "Front End Development",
    topicImportance: "High",
    hoursThisWeek: 2,
    weeklyHourGoal: 7,
    achievedStudyGoal:false,
    addStudyTime: function(hours){
        this.hoursThisWeek += hours;
        if (this.hoursThisWeek >= this.weeklyHourGoal){
            this.achievedStudyGoal = true;
            this.celebrate();
        }
    },
    celebrate: function(){
        success.classList.remove("hide");
        dance.classList.remove("hide");
    }
};
 //console.log(learning);
 learning.topic = "JavaScript";
 learning.learningGoals.splice(1,1);
 //console.log(learning);
 topic.innerText = `✔ I'm learning ${learning.topic} ! `;
 topic.classList.remove("hide");
 count.innerText = `✔ I have ${learning.learningGoals.length} learning goals !`;
 count.classList.remove("hide");
learning.addStudyTime(5);
 console.log(learning.achievedStudyGoal);

