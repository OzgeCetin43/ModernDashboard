import image1 from "../images/history-1.jpg";
import image2 from "../images/history-2.jpg";
import image3 from "../images/history-3.jpg";
import image4 from "../images/history-4.jpg";
import image5 from "../images/history-5.jpg";
import image6 from "../images/history-6.jpg";
import attachedFile1 from "../images/kanban-1.jpg";
import attachedFile2 from "../images/kanban-2.jpg";

type Task = {
  id: number;
  type: string;
  taskNo: number;
  tasks: Array<{
    id: number;
    title: string;
    description?: string;
    tags: Array<string>;
    users: Array<any>;
    version: string;
    attachedFiles?: any;
    see: number;
    comment: number;
    attachment: number;
  }>;
};

export const kanbanBoardTasks: Task[] = [
  {
    id: 1,
    type: "unassigned",
    taskNo: 2,
    tasks: [
      {
        id: 2,
        title: "Profile Page Structure",
        description:
          "Profile page means a web page accessible to the public or to guests.",
        tags: ["Admin"],
        users: [image1, image2],
        version: "#VL2436",
        see: 4,
        comment: 19,
        attachment: 2,
      },
      {
        id: 3,
        title: "Dashboard - Admin Layout Design",
        description:
          "The dashboard is the front page of the Administration UI.",
        tags: ["Layout", "Admin", "Dashboard"],
        users: [image3, image4, image5],
        version: "#VL2437",
        see: 14,
        comment: 32,
        attachment: 5,
      },
    ],
  },
  {
    id: 4,
    type: "to-do",
    taskNo: 2,
    tasks: [
      {
        id: 5,
        title: "Admin Layout Design",
        description:
          "The dashboard is the front page of the Administration UI.",
        tags: ["Layout", "Admin", "Dashboard"],
        users: [image6, image1, image2],
        version: "#VL2438",
        see: 13,
        comment: 52,
        attachment: 17,
      },
      {
        id: 6,
        title: "Marketing & Sales",
        description:
          "Sales and marketing are two business functions within an organization.",
        tags: ["Marketing", "Business"],
        users: [image3, image4, image5],
        version: "#VL2439",
        see: 24,
        comment: 10,
        attachment: 10,
      },
    ],
  },
  {
    id: 7,
    type: "in-progress",
    taskNo: 2,
    tasks: [
      {
        id: 8,
        title: "Brand Logo Design",
        description:
          "BrandCrowd's brand logo maker allows you to generate and customize stand-out brand logos in minutes.",
        tags: ["Logo", "Design", "UI/UX"],
        users: [image6, image1, image2],
        version: "#VL2440",
        see: 24,
        comment: 18,
        attachment: 12,
      },
      {
        id: 9,
        title: "Change Old App Icon",
        description:
          "Change app icons on Android: How do you change the look of your apps.",
        tags: ["Design", "Website"],
        users: [image3, image4, image5],
        version: "#VL2441",
        see: 64,
        comment: 35,
        attachment: 23,
      },
    ],
  },
  {
    id: 10,
    type: "in-reviews",
    taskNo: 3,
    tasks: [
      {
        id: 11,
        title: "Create Product Animations",
        attachedFiles: [attachedFile1],
        tags: ["Ecommerce"],
        users: [image6],
        version: "#VL2442",
        see: 8,
        comment: 54,
        attachment: 28,
      },
      {
        id: 12,
        title: "Product Features Analysis",
        description:
          "An essential part of strategic planning is running a product feature analysis.",
        tags: ["Product", "Analysis"],
        users: [image1, image2],
        version: "#VL2443",
        see: 14,
        comment: 31,
        attachment: 7,
      },
      {
        id: 13,
        title: "Create a Graph of Sketch",
        description:
          "To make a pie chart with equal slices create a perfect circle by selecting an Oval Tool.",
        tags: ["Sketch", "Marketing", "Design"],
        users: [image3, image4, image5, image6],
        version: "#VL2444",
        see: 12,
        comment: 74,
        attachment: 37,
      },
    ],
  },
  {
    id: 14,
    type: "completed",
    taskNo: 1,
    tasks: [
      {
        id: 15,
        title: "Create a Blog Template UI",
        description:
          "Landing page template with clean, minimal and modern design.",
        tags: ["Design", "Website"],
        users: [image1, image2, image3],
        version: "#VL2445",
        see: 24,
        comment: 10,
        attachment: 10,
      },
    ],
  },
  {
    id: 16,
    type: "new",
    taskNo: 1,
    tasks: [
      {
        id: 17,
        title: "Banner Design for FB & Twitter",
        attachedFiles: [attachedFile2],
        tags: ["UI/UX", "Graphic"],
        users: [image4, image5],
        version: "#VL2446",
        see: 11,
        comment: 26,
        attachment: 30,
      },
    ],
  },
];
