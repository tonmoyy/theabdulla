import Section from "../components/Section";
import Heading from "../components/Heading";
import {  service2, gradient} from "../assets";

//const openaiServicesIcons = [recording03, recording01, disc02, chromecast, sliders04];

const CorePillars = () => {
    return (
        <Section id="how-to-use">
            <div className="container">
                <Heading title="Core Pillars" />
                <div className="relative">
                    <div className="relative z-1 grid gap-3 lg:grid-cols-3">
                        <div className="relative min-h-5 border border-white/10 rounded-3xl overflow-hidden">
                            <div className="absolute inset-0">
                                <img src={service2} className="h-full w-full object-cover" width={630} height={750} alt="" />
                            </div>

                            <div className="absolute inset-0 flex flex-col justify-center p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                                <h4 className="h4 mb-4">Investment</h4>
                                <p>Family office style capital stewardship focused on long-term preservation and portfolio management.</p>
                            </div>
                        </div>

                        <div className="p-4 bg-[#15131D] rounded-3xl overflow-hidden lg:min-h-[15rem]">
                            <div className="py-12 px-4 xl:px-8">
                                <h4 className="h4 mb-4">Advisory</h4>
                                <p className="body-2 mb-[2rem] text-n-3">Institutional-grade financial intelligence, due diligence, and strategic guidance.</p>
                            </div>
                        </div>
                        <div className="p-4 bg-[#15131D] rounded-3xl overflow-hidden lg:min-h-[15rem]">
                            <div className="py-12 px-4 xl:px-8">
                                <h4 className="h4 mb-4">Equity</h4>
                                <p className="body-2 mb-[2rem] text-n-3">Direct investments, acquisitions, and strategic partnerships with high-potential businesses.</p>
                            </div>
                        </div>
                    </div>
                    <div >

                    </div>

                    <div className="absolute top-0 -left-[10rem] w-[56.625rem] h-[56.625rem] opacity-50 mix-blend-color-dodge pointer-events-none">
                        <img className="absolute top-1/2 left-1/2 w-[79.5625rem] max-w-[79.5625rem] h-[88.5625rem] -translate-x-1/2 -translate-y-1/2" src={gradient} width={1417} height={1417} alt="" />
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default CorePillars;
