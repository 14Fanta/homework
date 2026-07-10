import { innitCode as burger } from './burger/burger.js';
import { fixedFooterUp as footerUp } from './footer_up-fixed.js'
import { modalMain as modalGyms } from './modal/modal.js'
import { mainEventListener } from './slider/our-gyms.js'
import { initCode as swiperSlider} from './slider/howtoBuySlider.js'
import { headerFixed } from './header.js'

try {
  (mainEventListener, modalGyms, footerUp, burger,swiperSlider, headerFixed);
} catch (i) {
	console.error(i)
}