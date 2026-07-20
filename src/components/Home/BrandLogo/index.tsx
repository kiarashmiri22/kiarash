'use client';
import Slider from 'react-infinite-logo-slider';
import { brandList } from './data';
import { Icon } from '@iconify/react';

function BrandLogo() {
    return (
        <section>
            <div className="2xl:py-20 py-11">
                <div className="container">
                    <div className="gap-4">
                        <div className="flex justify-center text-center py-4 relative">
                            <p className="text-white font-medium">
                                Technologies I <span className='text-primary'>work with</span>
                            </p>
                        </div>

                        <div className="py-3 Xsm:py-7">
                            <Slider
                                width="140px"
                                duration={20}
                                pauseOnHover={true}
                                blurBorders={false}
                            >
                                {brandList.map((items, index) => (
                                    <Slider.Slide key={index}>
                                        <div className='mr-10 w-full h-full flex flex-col items-center gap-2'>
                                            <Icon icon={items.icon} width={40} height={40} />
                                            <span className="text-white/50 text-sm">{items.title}</span>
                                        </div>
                                    </Slider.Slide>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default BrandLogo;
