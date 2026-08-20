import { FiMail,  } from "react-icons/fi";
import {
    FaLinkedin,
    FaGithub,
    FaFacebookMessenger,
    FaViber,
} from "react-icons/fa";

export const channels = [
    {
        id: 1,
        title: "Email",
        value: "mhakemendez31@gmail.com",
        url: "mailto:mhakemendez31@gmail.com",
        icon: FiMail,
    },
    {
        id: 2,
        title: "Viber",
        value: "Chat on Viber",
        url: "viber://chat?number=%2B639559503356",
        icon: FaViber,
    },
    {
        id: 3,
        title: "Messenger",
        value: "Message me on Facebook",
        url: "https://m.me/michael.mendez.562",
        icon: FaFacebookMessenger,
    },
    {
        id: 4,
        title: "Linkedin",
        value: "Connect to me",
        url: "https://www.linkedin.com/in/mhake-mendez/",
        icon: FaLinkedin,
    },
    {
        id: 5,
        title: "Github",
        value: "@mhakemendez31",
        url: "https://github.com/mhakemendez",
        icon: FaGithub,
    },
]