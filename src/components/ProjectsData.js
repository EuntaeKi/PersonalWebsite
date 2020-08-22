export const exData = {
    "amazon-carry": [
        {
            "header": "Project Requirement",
            "list": [
                "Objective: Design an embedded system device with Raspberry Pi while meeting all the System Requirement (Next Page)",
                "Purpose: To carry groceries for the convenience of our target audience",
                "Target Audience: Both the general audience and people with physical disadvantages",
                "Market Need: Even though online grocery shopping is becoming the trend, in-store shopping will continue as it allows the customers to look at the product before making a purchase. A shopping cart that follows the user will enhance the in-store shopping experience."
            ],
            "image": {
                "src": require("../img/Amazon_Carry_Use_Diagram.svg"),
                "alt": "Amazon Carry Use Diagram",
                "caption": "Figure 1. Amazon Carry Use Diagram",
            }
        },
        {
            "header": "System Requirement",
            "subheader": "The project needs to have following features included in the final product:",
            "list": [
                "Front-end (Interface)",
                "Communication (Wi-Fi or Bluetooth, and internal communcation)",
                "Machine Learning",
                "Periphral Processor (STM32, a peripheral processor)",
                "Main Processor (Raspberry Pi)"
            ],
            "text": "I was responsible for front-end development and internal communication (data transfer)"
        },
        {
            "header": "Design",
            "subheader": "I decided to use the following features for the development:",
            "list": [
                "Node.js: Because our product operates under Real-Time Operating System (RTOS), having asynchronous server-side environment with non-blocking I/O operations is crucial",
                "React.js: Virtual DOM allows the pages to update in real time, which provides information to our users in real-time",
                "WebSocket: I considered Socket.IO and Express.js, but since we only need to transfer small amount of data, I chose to use light-weighted WebSocket protocol"
            ],
            "image": {
                "src": require("../img/Amazon_Carry_Design.svg"),
                "alt": "Amazon Carry Prototype Flow Diagram",
                "caption": "Figure 2. Amazon Carry Design Prototype Flow Diagram"
            }
        },
        {
            "header": "Prototype: Chassis",
            "subheader": "At this stage, following features were implemented:",
            "list": [
                "Camera with Machine Learning feature to recognize a human",
                "Motor that can move the chassis around based on the keyboard input",
                "VCSEL Sensor that has an error in the driver",
                "Basic web interface (introduced in the next page)"
            ],
            "image": {
                "src": require("../img/Amazon_Carry_Prototype_Chassis.jpg"),
                "alt": "Prototype of Amazon Carry's chassis",
                "caption": "Figure 3. Prototype of Amazon Carry's chassis",
                "border": "true"
            }
        },
        {
            "header": "Prototype: Web Interface",
            "list": [
                "Front-end was mostly finished with React.js",
                "Spun up the web server on the Reaspberry Pi using Node.js, which listens to all the data coming it from the client-side web interface",
                "The web interface will send the data to the Raspberry Pi using the WebSocket protocol",
                "Able to provide border timtruee information of the cart like the distance from the user, connectivity to the cart, and manually control the cart"
            ],
            "image": {
                "src": require("../img/Amazon_Carry_Prototype_Web_Interface.svg"),
                "alt": "Prototype of Amazon Carry's web interface",
                "caption": "Figure 4. Prototype of Amazon Carry's web interface"
            }
        },
        {
            "header": "Feedback",
            "subheader": "Needed to implement the following features into our product:",
            "list": [
                "Object tracking feature once the camera recognizes the person",
                "Data transfer between the Raspberry Pi and the server",
                "Distance Sensor Driver fix to corretly measure the data"
            ]
        },
        {
            "header": "End Product",
            "subheader": "I implemented the following:",
            "list": [
                "Web server can communicate with the web interface using WebSocket protocol",
                "Web server can communicate with other internal Python scripts using the Child_Process feature and a JSON file",
                "Using pickle files to transfer data between the Raspberry Pi and ML camera"
            ],
            "text": "Overall, the product was able to track the user once it detects them, measure the distance from the user & listen to the manual control from the web interface",
            "video": {
                "src": require("../img/Amazon_Carry_End_Product.mp4"),
                "alt": "Amazon Carry successfully following a user",
                "caption": "Figure 5. Amazon Carry demonstration",
                "border": "true"
            }
        }
    ],
    "arm-processor": [
        {
            "header": "Project Description",
            "list": [
                "Objective: Design an ARM-based processor that can execute ARM instructions using SystemVerilog",
                "Purpose: To demonstrate the knowledge on computer architecture and understand processor design choices",
                "Apprach: Break the processor into 4 different parts/stages: Register Files, ALUs, non-pipelined processor, and pipelined processor"
            ],
            "image": {
                "src": require("../img/ARM_A4.svg"),
                "alt": "Pipelined ARM-based Processor Design",
                "caption": "Figure 1. Pipelined ARM-based Processor Layout",
            }
        },
        {
            "header": "Stage 1: Register File",
            "list": [
                "Comprised of a decoder and two 32x64 to 64 MUX",
                "Main challenge was to scale up the 2:1 MUX and transpose the MUX to become 64-bit 32:1 MUX from a basic 2:1 MUX",
                "Built with pure logic gates (AND, OR, NAND, NOR, XOR, and NOT)",
            ],
            "image": {
                "src": require("../img/ARM_A1.svg"),
                "alt": "Register File layout",
                "caption": "Figure 2. Register File layout",
            }
        },
        {
            "header": "Stage 2: ALU",
            "subheading": "The following requirements were met:",
            "list": [
                "Need to perform 6 different operations (Equals B, Add, Subtract, AND, OR, XOR)",
                "8 Ports as shown in the diagram on the right (64-bit Bus A, 64-bit Bus B, ALU Op, Output, Flag Outputs)",
                "Detect when the flags should output true (Negative, Overflow, Zero, Carryout)",
            ],
            "image": {
                "src": require("../img/ARM_A2.svg"),
                "alt": "ALU layout",
                "caption": "Figure 3. ALU layout",
            }
        },
        {
            "header": "Stage 3: Single-Cycle Processor",
            "list": [
                "Using the Register Files and ALUs written in Stage 1 & 2, I designed the singe-cycle processor",
                "Divde the stages into 5 different parts: Instruction Fetch (IF), Instruction Decode (ID), Execute (EX), Memory (MEM), Write (WR)",
                "Memory and Program Counters are provided by the course",
                "Follwing instructions must be implemented: BR, ADDI, ADDS, SUBS, LDUR, STUR, and more",
            ],
            "image": {
                "src": require("../img/ARM_A3.svg"),
                "alt": "Singe-Cycle Processor layout",
                "caption": "Figure 4. Singe-Cycle Processor layout",
            }
        },
        {
            "header": "End Product",
            "subheader": "Pipelined processors can simultaneously process 5 different programs at once",
            "list": [
                "The registers between the stages store the values temporarily",
                "Implemented forwarding and accelerated branches to hold onto the old register values",
                "Implemented delay slots to avoid data contamination",
                "Successfully executed simple algorithms like Fibonnaci Sequence Generator & sort in ARM Assembly files"
            ],
            "image": {
                "src": require("../img/ARM_A4.svg"),
                "alt": "Pipelined Processor layout",
                "caption": "Figure 5. Pipelined Processor layout",
            }
        },
    ],
    "doctor-fingertip": [
        {
            "header": "Project Description",
            "subheader": "Design a portable and low cost medical monitoring system with following features:",
            "list": [
                "Measure temperature, blood pressure, respiation rate, pulse rate, and EKG signals",
                "Use both Arduino Mega2560 and Arduino UNO to distribute the process task",
                "Deisgn an interactable GUI using Elegoo TFT Touch Screen which shows the measured values, battery status, and converted units",
                "Alerted the user of irregularities when the data exceed the pre-set range",
                "Enabled SSH connection allowing remote access to user data",   
            ],
            "image": {
                "src": require("../img/DAF_L1.svg"),
                "alt": "High-level System Block Diagram",
                "caption": "Figure 1. High-level System Block Diagram",
            }
        },
        {
            "header": "Phase 1: Building Core Functions",
            "subheader": "For phase 1, following features were implemented:",
            "list": [
                "Design a Task Control Block (TCB) that defines which task should be executed",
                "Establish data connection between control and peripheral processors",
                "Implement a task queue that executes TCBs in a sequential manner",
                "Design core functions such as measure, convert units, display (in form of text), warning, and battery status",
            ],
            "image": {
                "src": require("../img/DAF_L2.svg"),
                "alt": "Arduino display prototype",
                "caption": "Figure 2. Arduino display prototype",
            }
        },
        {
            "header": "Phase 2: Design Interactive UI",
            "subheader": "For phase 2, following features were implemented:",
            "list": [
                "Implement a hardware based reference for the system time base to support the timing of task scheduling, switching control, warning, and alarming",
                "Modify the task scheduler to dynmically create and delete TCBs into the task queue (using doubly linked list)",
                "Design and implement a keypad TFT (interactable GUI) for users to decide which opeation to perform (Shown in figure 3)"
            ],
            "image": {
                "src": require("../img/DAF_L3.svg"),
                "alt": "TFT keypad design",
                "caption": "Figure 3. TFT keypad design prototype",
            }
        },
        {
            "header": "Phase 3: Remote Data Access",
            "subheader": "For phase 3, following features were implemented:",
            "list": [
                "Implement a blood cuff (with a switch) that would mimic blood pressure cuff",
                "Measure respiration rate, taking in voltage generator to mimic the respiration rate sensor's output",
                "Improve the display of the TFT to support more functions, such as acknowledge when the alarm goes off",
                "Establish SSH connection to remotely access the data",
                "Improve the visibility for the users by color-coding the text for each cases of alarm"
            ],
            "image": {
                "src": require("../img/DAF_L4.svg"),
                "alt": "Improved UI of the TFT keypad",
                "caption": "Figure 4. Improved UI of the TFT keypad",
            }
        },
        {
            "header": "End Product",
            "subheader": "For the final phase, following features were implemented:",
            "list": [
                "Implement Command-Line Interface with the remote SSH connection",
                "Implement EKG measurements by converting the analog signal to a processable digital signal",
                "Process the measured EKG values by converting it to frequency domain",
                "Use Fast-Fourier Transform (FFT) library to process the EKG data"
            ],
            "image": {
                "src": require("../img/DAF_Final.png"),
                "alt": "Final setup of the product",
                "caption": "Figure 5. Final setup of the product",
                "border": "true"
            },
            "text": "From the project, I gained a lot of experience with C pointers, buffers, project management, basic UI development, and how digial signal processing theories gets used"
        },
    ],
    "personal-website": [
        {
            "header": "Project Description",
            "subheader": "Design a portfolio website using the front-end concepts I know:",
            "list": [
                "Design the prototype with Adobe XD",
                "Use React.js to design the prototype for re-using components and virtual DOM",
                "Organize the components using Bootstrap's gridbox system",
                "Decided not to use Redux and Node.js as the website don't need the server & state management system"
            ],
            "image": {
                "src": require("../img/PW_P1.png"),
                "alt": "Personal website layout",
                "caption": "Figure 1. Personal website layout",
                "border": "true"
            }
        },
        {
            "header": "Design: Home",
            "subheader": "Purpose: To minimally introduce the purpose of this website",
            "list": [
                "Implemented NavBar with LinkButton as <a> and <button> cannot be nested (<Link> is not sufficient)",
                "Simple greeting text to welcome people in :D",
                "Implemented the animation of the text by using a state and setInterval()"
            ],
            "image": {
                "src": require("../img/PW_P2.png"),
                "alt": "Home page layout",
                "caption": "Figure 2. Home page layout",
                "border": "true"
            }
        },
        {
            "header": "Design: About",
            "subheader": "Purpose: To introduce what type of person I am and what I am interested outside of work",
            "list": [
                "List of how I would describe myself",
                "Styled the keywords for emphasis",
                "Separator to distinguish how I describe myself and how others describe me",
                "Added few quotes on how others describe me, with some humor"
            ],
            "image": {
                "src": require("../img/PW_P3.png"),
                "alt": "About page layout",
                "caption": "Figure 3. About page layout",
                "border": "true"
            }
        },
        {
            "header": "Design: Resume",
            "subheader": "Purpose: Portray the current text resume in a visually appealing way",
            "list": [
                "Organize the information in an intuitive way",
                "Skill sets quantified with respect to what I know the best"
            ],
            "image": {
                "src": require("../img/PW_P4.png"),
                "alt": "Top of the Resume page layout",
                "caption": "Figure 4. Top of the Resume page layout",
                "border": "true"
            }
        },
        {
            "header": "Design: Projects",
            "subheader": "Purpose: Portray projects I have covered in each stages, explaining my choices and things I learned",
            "list": [
                "Implemented overlay style to give a presentation/gallary display",
                "Implemented key listeners for the users to navigate in an intuitive way (Right, Left Arrow, Escape)",
                "Re-designed all the project-related diagrams in a SVG format for the usability & visibility",
                "Implemented two different templates to load depending on image file attachment"
            ],
            "image": {
                "src": require("../img/PW_P5.png"),
                "alt": "Projects page layout",
                "caption": "Figure 5. Projects page layout",
                "border": "true"
            }
        },
        {
            "header": "To Do",
            "subheader": "Following features still need to be implemented:",
            "list": [
                "Implement mobile-friendly version of the website",
                "Use React Hooks to re-write the website",
                "Use SaSS to factor out the vanilla CSS styles"
            ],
            "image": {
                "src": require("../img/PW_P6.png"),
                "alt": "Mobile version layout",
                "caption": "Figure 6. Mobile version layout",
                "border": "true"
            }
        },
    ]
}