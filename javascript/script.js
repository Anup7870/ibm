
document.addEventListener("DOMContentLoaded", function() {
    const mentalHealthList = document.querySelector(".mental-health-list");

    if (!mentalHealthList) {
        console.error("Element with class 'mental-health-list' not found.");
        return;
    }

    // Sample data for demonstration
    const mentalHealthData = [
        {
            title: "Understanding Anxiety",
            info: "Anxiety is a normal and often healthy emotion. However, when a person regularly feels disproportionate levels of anxiety, it might become a medical disorder. This article provides an overview of anxiety, its symptoms, causes, and treatment options.",
        },
        {
            title: "Managing Stress",
            info: "Stress is a natural response to challenging situations. However, excessive or prolonged stress can have negative effects on mental and physical health. This article offers practical tips and techniques for managing stress effectively.",
        },
        {
            title: "Coping with Depression",
            info: "Depression is a common mental health disorder characterized by persistent feelings of sadness and loss of interest. This article discusses the symptoms, causes, and various coping strategies for individuals dealing with depression.",
        },
        {
            title: "Improving Sleep Quality",
            info: "Getting enough quality sleep is essential for overall well-being. This article provides tips and techniques to improve sleep quality and establish healthy sleep habits.",
        },
        {
            title: "Building Resilience",
            info: "Resilience is the ability to bounce back from adversity. This article explores strategies to develop resilience and enhance mental strength in the face of challenges.",
        },
        {
            title: "Promoting Self-Care",
            info: "Self-care involves taking deliberate actions to prioritize and nurture your own well-being. This article offers practical self-care tips and emphasizes the importance of self-care in maintaining good mental health.",
        }
    ];

    // loop only 3 first item when user click showmore then show all
    let mentalHealthListLength = 3;
    let showmore = document.getElementById("showMore");

    showmore.addEventListener("click", function() {
        if(mentalHealthListLength === mentalHealthData.length) {
            mentalHealthListLength = 3;
            document.querySelector("#showMore").innerHTML = "Show More";
        }else{
            mentalHealthListLength = mentalHealthData.length;
            document.querySelector("#showMore").innerHTML = "Show Less";
        }
       
        insertData();
    })
    // loop and insert data to html
    function insertData() {
        mentalHealthList.innerHTML = "";
        for (let i = 0; i < mentalHealthListLength; i++) {
            mentalHealthList.innerHTML += `
            <div class="cardFeature">
          <div class="wrapper">
            <h2>${mentalHealthData[i].title}</h2>
            <p>
                ${mentalHealthData[i].info}
            </p>
            <button class="button mt">Read The Report</button>
          </div>
        </div>
            `;
        }
    }

    insertData();
});