import Slider from "react-slick"
import { slider8 } from "../../../../common/slider/slider"

function StoryBox() {
    return (
        <div className="story-section ratio_115">
            <Slider {...slider8} className="slide-8 no-arrow default-space">
                {Array(6).fill().map((a, i) => (
                    <div key={i}>
                        <div className="story-box">
                            <div className="story-bg bg-size">
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default StoryBox