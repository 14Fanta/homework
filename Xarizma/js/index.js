// import r from './modal.js'
import { innitCode as burger } from './burger/burger.js';
import { fixedFooterUp as footerUp } from './footer_up-fixed.js'
import { modalMain as modalGyms } from './modal/modalGyms.js'
import { mainEventListener } from './slider/our-gyms.js'
import { initCode as swiperSlider} from './slider/howtoBuySlider.js'

try {
  (mainEventListener, modalGyms, footerUp, burger,swiperSlider);
} catch (i) {
	console.error(i)
}