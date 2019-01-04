/**
 * Action types
 * */
const ADD_COURSE = 'course/ADD_COURSE';

/**
 * Initial state
 * */
const initialState = {
    courses: [
        {
            id: 1,
            title: 'HTML Basics',
            courseType: 'Course',
            description: 'Learn HTML (HyperText Markup Language), the language common to every website. HTML describes the basic structure and content of a web page. If you want to build a website or web application, you\'ll need to know HTML.',
            author: 'Guil Hernandez',
            category: 'HTML',
            length: 300,
        },
        {
            id: 2,
            title: 'HTML Video and Audio',
            courseType: 'Course',
            description: 'Text and images have always been the foundation of web content, but more than ever, video and audio are also a part of that content mix. Fortunately, we can now create standards-based video and audio players that don\'t require the use of plugins. Adding video and audio to a webpage is almost as easy as adding an image or formatting some text.',
            author: 'Nick Pettir',
            category: 'HTML',
            length: 300,
        },
        {
            id: 3,
            title: 'SVG Workflow and Tools',
            courseType: 'Workshop',
            description: 'Learn useful tools and techniques for optimizing, organizing and structuring your SVG files. Then build an SVG icon system using a Gulp-based SVG sprite tool.',
            author: 'Guil Hernandez',
            category: 'HTML',
            length: 300,
        },
        {
            id: 4,
            title: 'Using CSS Variables',
            courseType: 'Workshop',
            description: 'Learn how to use native CSS variables to make your stylesheets less repetitive, easier to maintain and more.',
            author: 'Guil Hernandez',
            category: 'HTML',
            length: 300,
        },
        {
            id: 5,
            title: 'Bootstrap 4 Basics',
            courseType: 'Course',
            description: 'Learn to use the latest in Bootstrap 4, one of the most popular open source front end frameworks, to help you build a functional design and layout in little time.',
            author: 'Guil Hernandez',
            category: 'HTML',
            length: 300,
        },
        {
            id: 6,
            title: 'Practice Flexible CSS Grid Layout',
            courseType: 'Workshop',
            description: 'Practice using CSS Grid features that adapt your content to available space and intelligently size and position items within the grid container.',
            author: 'Guil Hernandez',
            category: 'HTML',
            length: 300,
        },
        {
            id: 7,
            title: 'Object-Oriented Javascript',
            courseType: 'Course',
            description: 'In this course you\'ll learn the basics of object-oriented programming in JavaScript along with the new ES2015 Class syntax. ',
            author: 'Ashley Boucher',
            category: 'Javascript',
            length: 300,
        },
        {
            id: 8,
            title: 'Practice Basic Arrays in JavaScript',
            courseType: 'Workshop',
            description: 'Practice creating array literals, accessing array items, and using array methods to add and remove array items.',
            author: 'Dave McFarland',
            category: 'Javascript',
            length: 300,
        },
        {
            id: 9,
            title: 'jQuery Basics',
            courseType: 'Course',
            description: 'jQuery is an immensely popular JavaScript library used to add interactivity to webpages. It\'s a mature and robust tool that can help you build confidence as a developer by helping you quickly and easily get projects up and running. This course explores the fundamentals of manipulating elements on a webpage and responding to user interactions. We cover what jQuery is, why you\'d want to use it, and how to include it in your projects. Throughout the course, you\'ll use jQuery to enhance several small projects and learn how to add a level of flair and interactivity to any site you work on.',
            author: 'Treasure Porth',
            category: 'Javascript',
            length: 300,
        },
    ],
    selectedCourseIndex: -1,
};

/**
 * Actions
 * */
export const CourseActions = {
    addCourse: dataCourse => {
        return {
            type: ADD_COURSE,
            ...dataCourse
        };
    },
};

/**
 * Reduces
 * */
export default function Course(state = initialState, action) {
    switch (action.type) {
        case ADD_COURSE:
            return {
                ...state,
                courses: [
                    ...state.courses,
                    {
                        title: action.title,
                        courseType: action.courseType,
                        description: action.description,
                        author: action.author,
                        category: action.category,
                        length: action.length,
                    }
                ],
            };
        default:
            return state;
    }
}
