export default class e {
	constructor(e, t = null) {
		if (
			((this.config = e),
			(this.burgerButton = document.querySelector(`.${this.config.BURGER}`)),
			(this.burgerMenu = document.querySelector(`.${this.config.HEADER_MENU}`)),
			(this.body = document.querySelector(`.${this.config.PAGE_BODY}`)),
			(this.headerFixedInstance = t),
			(this.main = document.querySelector(`.${this.config.MAIN}`)),
			!this.burgerButton || !this.burgerMenu || !this.body)
		)
			throw Error('Required DOM elements are missing.')
		;((this.isMobileView = window.innerWidth <= this.config.BREAKPOINT),
			(this.onBurgerClick = this.onBurgerClick.bind(this)),
			(this.onBodyClick = this.onBodyClick.bind(this)),
			(this.handleTouchStart = this.handleTouchStart.bind(this)),
			(this.handleTouchMove = this.handleTouchMove.bind(this)),
			(this.handleTouchEnd = this.handleTouchEnd.bind(this)),
			(this.onWindowResize = this.onWindowResize.bind(this)),
			this.manageEvents(),
			window.addEventListener('resize', this.onWindowResize))
	}
	manageEvents() {
		this.isMobileView
			? this.initEvents()
			: (this.removeEvents(), this.hideBurgerMenu())
	}
	initEvents() {
		;(this.burgerButton.addEventListener('click', this.onBurgerClick),
			this.body.addEventListener('click', this.onBodyClick),
			this.body.addEventListener('touchstart', this.handleTouchStart),
			this.body.addEventListener('touchmove', this.handleTouchMove),
			this.body.addEventListener('touchend', this.handleTouchEnd))
	}
	removeEvents() {
		;(this.burgerButton.removeEventListener('click', this.onBurgerClick),
			this.body.removeEventListener('click', this.onBodyClick),
			this.body.removeEventListener('touchstart', this.handleTouchStart),
			this.body.removeEventListener('touchmove', this.handleTouchMove),
			this.body.removeEventListener('touchend', this.handleTouchEnd))
	}
	onWindowResize() {
		let e = window.innerWidth <= this.config.BREAKPOINT
		this.isMobileView !== e && ((this.isMobileView = e), this.manageEvents())
	}
	onBurgerClick() {
		let e = this.burgerButton.classList.toggle(this.config.BURGER_OPEN)
		;((this.burgerButton.ariaLabel = e
			? this.config.lABEL.CLOSE
			: this.config.lABEL.OPEN),
			(this.burgerButton.ariaExpanded = e),
			this.burgerMenu.classList.toggle(this.config.HEADER_MENU_OPEN, e),
			this.body.classList.toggle(this.config.PAGE_BODY_NO_SCROLL, e),
			this.main && (this.main.style.pointerEvents = e ? 'none' : ''),
			this.headerFixedInstance &&
				(e
					? this.headerFixedInstance.removeFixedClass()
					: this.headerFixedInstance.updateFixedClass()))
	}
	hideBurgerMenu() {
		let e = this.isBurgerMenuOpen()
		;(this.burgerButton.classList.remove(this.config.BURGER_OPEN),
			(this.burgerButton.ariaLabel = this.config.lABEL.OPEN),
			(this.burgerButton.ariaExpanded = !1),
			this.burgerMenu.classList.remove(this.config.HEADER_MENU_OPEN),
			this.body.classList.remove(this.config.PAGE_BODY_NO_SCROLL),
			this.main && (this.main.style.pointerEvents = ''),
			e &&
				this.headerFixedInstance &&
				this.headerFixedInstance.updateFixedClass())
	}
	isBurgerMenuOpen() {
		return this.burgerMenu.classList.contains(this.config.HEADER_MENU_OPEN)
	}
	onBodyClick(e) {
		let t = e.target,
			i = t.classList.contains(this.config.MENU_LINK),
			s = this.isBurgerMenuOpen(),
			n =
				!t.closest(`.${this.config.HEADER_MENU}`) &&
				!t.closest(`.${this.config.BURGER}`)
		;((i && window.innerWidth <= this.config.BREAKPOINT) || (s && n)) &&
			this.hideBurgerMenu()
	}
	handleTouchStart(e) {
		this.isBurgerMenuOpen() &&
			((this.touchStartX = e.changedTouches[0].screenX),
			(this.burgerMenu.style.transition = 'none'))
	}
	handleTouchMove(e) {
		if (!this.isBurgerMenuOpen()) return
		let t = e.changedTouches[0].screenX,
			i = Math.max(0, t - this.touchStartX)
		this.burgerMenu.style.right = `-${i}px`
	}
	handleTouchEnd(e) {
		if (!this.isBurgerMenuOpen()) return
		let t = e.changedTouches[0].screenX,
			i = t - this.touchStartX
		;((this.burgerMenu.style.transition = ''),
			(this.burgerMenu.style.right = ''),
			i > 70 && this.hideBurgerMenu())
	}
}
