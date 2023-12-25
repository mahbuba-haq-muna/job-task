import img from "../../assets/businessman-consulting-watch_74855-2350.jpg"

const About = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold py-10 text-center">About Us</h1>
            <div >
                <img src={img} alt="" className="w-1/2 mx-auto" />
                <p className="w-2/3 py-20 text-xl mx-auto">Welcome to TaskBurst, where productivity meets simplicity. We understand that managing tasks can be challenging, whether you're an individual striving for personal efficiency or a team working towards collective success.

                    At [Your Website Name], we believe in empowering you to take control of your tasks and projects with ease. Our platform is designed to simplify your workflow, enhance collaboration, and bring clarity to your daily responsibilities. With an intuitive interface and powerful features, we strive to make task management a seamless and enjoyable experience for everyone.</p>
            </div>
        </div>
    );
};

export default About;