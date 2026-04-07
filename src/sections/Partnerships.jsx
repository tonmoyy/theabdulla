import {check} from "../assets";
import Button from "../components/Button";
import Section from "../components/Section";

const partnerships = [
    {
        title: "Partner With Us\n",
        text: "The Abdulla Capital engages with institutional partners, family offices, and entrepreneurs seeking strategic capital and long-term growth partnerships.\n",
    }
];


const Partnerships = () => {
    return (
        <Section crosses id="partnerships">
            <div className="container lg:flex">
                <div className="w-full">
                    <h2 className="h2 mb-4 md:mb-8">OPPORTUNITIES / PARTNERSHIPS</h2>

                    <ul className="w-fit ">
                        {partnerships.map((item, i) => (
                            <li className="mb-3 py-3" key={i}>
                                <div className="flex items-center">
                                    <img src={check} width={35} height={35} alt=""/>
                                    <h6 className="body-2 ml-5">{item.title}</h6>
                                </div>
                                {item.text && <p className="body-2 mt-3 text-n-4">{item.text}</p>}
                            </li>
                        ))}
                    </ul>
                    <div className="flex p-4 justify-evenly ">

                        <Button className="p-4 ">
                            Partnership Opportunities
                        </Button>

                        <Button className="p-4">
                            Submit Proposal
                        </Button>


                    </div>


                </div>
            </div>
        </Section>
    );
};

export default Partnerships;
