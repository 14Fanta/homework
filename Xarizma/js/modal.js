export default class t {
	constructor(t) {
		let s = { MODAL_WRAPPER: 'modal' }
		if (
			((this.config = Object.assign(s, t)),
			(this.modal = document.querySelector(`.${this.config.MODAL_WRAPPER}`)),
			(this.body = document.querySelector(`.${this.config.PAGE_BODY}`)),
			(this.speed = 0),
			(this.isOpen = !1),
			(this.modalWindow = null),
			(this.lastActiveElement = !1),
			(this.focusElements = [
				'a[href]',
				'button',
				'input',
				'select',
				'textarea',
				'[tabindex]',
			]),
			!this.modal)
		)
			throw Error('Modal element is missing.')
		;((this.onDocumentClick = this.onDocumentClick.bind(this)),
			(this.onKeyDown = this.onKeyDown.bind(this)),
			(this.onModalClick = this.onModalClick.bind(this)),
			(this.open = this.open.bind(this)),
			(this.close = this.close.bind(this)),
			(this.enableScroll = this.enableScroll.bind(this)),
			(this.disableScroll = this.disableScroll.bind(this)),
			(this.catchFocus = this.catchFocus.bind(this)),
			(this.trapFocus = this.trapFocus.bind(this)),
			this.initEvents())
	}
	initEvents() {
		;(document.addEventListener('click', this.onDocumentClick),
			window.addEventListener('keydown', this.onKeyDown),
			this.modal.addEventListener('click', this.onModalClick))
	}
	onDocumentClick(t) {
		let s = t.target.closest('[data-modal-button]')
		if (s) {
			let i = s.dataset.modalButton,
				e = s.dataset.modalSpeed
			return (
				(this.lastActiveElement = document.activeElement),
				(this.speed = e ? parseInt(e) : 300),
				(this.modalWindow = document.querySelector(
					`[data-modal-window="${i}"]`,
				)),
				this.open()
			)
		}
		let o = t.target.closest('[data-modal-close]')
		if (o) return this.close()
	}
	onKeyDown(t) {
		if (
			('Escape' === t.key && this.isOpen && this.close(),
			'Tab' === t.key && this.isOpen)
		)
			return this.catchFocus(t)
	}
	onModalClick(t) {
		let s = t.target
		!s.closest('[data-modal-window]') && this.isOpen && this.close()
	}
	open() {
		;(this.modal.style.setProperty('--transition-time', `${this.speed / 1e3}s`),
			this.modal.classList.add('modal--open'),
			this.modalWindow.classList.add('modal__window--open'),
			(this.isOpen = !0),
			this.disableScroll(),
			setTimeout(() => {
				this.trapFocus()
			}, this.speed - 16))
	}
	close() {
		;(this.modal.classList.remove('modal--open'),
			this.modalWindow.classList.remove('modal__window--open'),
			(this.isOpen = !1),
			this.enableScroll(),
			this.trapFocus())
	}
	enableScroll() {
		this.body.classList.remove(this.config.PAGE_BODY_NO_SCROLL)
	}
	disableScroll() {
		this.body.classList.add(this.config.PAGE_BODY_NO_SCROLL)
	}
	catchFocus(t) {
		let s = this.modalWindow.querySelectorAll(this.focusElements),
			i = Array.prototype.slice.call(s),
			e = i.indexOf(document.activeElement)
		;(t.shiftKey && 0 === e && (i[i.length - 1].focus(), t.preventDefault()),
			t.shiftKey || e !== i.length - 1 || (i[0].focus(), t.preventDefault()))
	}
	trapFocus() {
		let t = this.modalWindow.querySelectorAll(this.focusElements)
		this.isOpen ? t && t[0].focus() : this.lastActiveElement.focus()
	}
}
