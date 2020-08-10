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
                "real": ""
            }
        },
        {
            "header": "Prototype: Web Interface",
            "list": [
                "Front-end was mostly finished with React.js",
                "Spun up the web server on the Reaspberry Pi using Node.js, which listens to all the data coming it from the client-side web interface",
                "The web interface will send the data to the Raspberry Pi using the WebSocket protocol",
                "Able to provide real time information of the cart like the distance from the user, connectivity to the cart, and manually control the cart"
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
                "real": ""
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
            "header": "Stage 3: Singe-Cycle Processor",
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
            "subheader": "Pipelined processors can simultaneously process 5 different programs at once,",
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
            "header": "End Product",
            "subheader": "Pipelined processors can simultaneously process 5 different programs at once,",
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
    "personal-website": {
        "header": ["Project Requirement", "System Requirement", "Design", "Prototype", "Feedback", "End Product"],
        "content": {
            "subheader": [
                "", 
                "The project needs to have following features included in the final product:",
                "I was in charge of front-end development and decided to use the following tools/languages:"
            ],
            "list": [
                [
                    "Objective: Design an embedded system device with Raspberry Pi while meeting all the System Requirement (Next Page)",
                    "Purpose: To carry groceries for the convenience of our target audience",
                    "Target Audience: Both the general audience and people with physical disadvantages",
                    "Market Need: Even though online grocery shopping is becoming the trend, in-store shopping will continue as it allows the customers to look at the product before making a purchase. A shopping cart that follows the user will enhance the in-store shopping experience."
                ], 
                [
                    "Front End (Interface)",
                    "Machine Learning",
                    "Communication (Wi-Fi or Bluetooth, and internal communcation)",
                    "Periphral (Intermediate Processor)",
                    "Control (Raspberry Pi)"
                ],
                [
                    "Node.js: Because our product operates under Real-Time Operating System (RTOS), having asynchronous server-side environment with non-blocking I/O operations is crucial",
                    "React.js: Virtual DOM allows the pages to update in real time, which provides information to our users in real-time",
                    "WebSocket: I considered Socket.IO and Express.js, but since we only need to transfer small amount of data, I chose to use light-weighted WebSocket protocol"
                ]
            ]
        },
        "image": [require("../img/Amazon_Carry_Use_Diagram.svg"), "", require("../img/Amazon_Carry_Design.svg"), "Image-4", "Image-5", "Image-6"],
        "imageAlt": [ "Amazon Carry Use Diagram", "", "", "Image-4", "Image-5", "Image-6"],
        "imageCaption": [ "Figure 1. Amazon Carry Use Diagram", "", "Figure 2. Amazon Carry Design Prototype", "", "", "" ]
    }
}