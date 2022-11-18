function out(text, color, background) {
  if (!background) background = 'transparent'
  console.log(`%c${text}`, `color: ${color}; background: ${background}; font-size: 32px;`);
}

out('INT FRACT', '#5865f2')

function ripple() {
  const buttons = document.querySelectorAll('button.btn:not(.btn:disabled)')
  const anchors = document.querySelectorAll('a.btn')

  for (const button of buttons) {
    pulse(button)
  }

  for (const a of anchors) {
    pulse(a)
  }
}

function pulse(e) {
  let color = ''
  for (const item of e.classList) {
    if (item.startsWith('pulse-')) {
      color = `#${item.split('-')[1]}`
    }
    if (!color) {
      if (item === 'subtle') {
        color = '#2c6fef'
      }
    }
  }
  if (!color) color = '#2f3136'
  e.setAttribute('onpointerdown', `ripplet(arguments[0], { clearing: false, color: "${color}" })`)
  e.setAttribute('onpointerup', 'ripplet.clear(this)')
  e.setAttribute('onpointerleave', 'ripplet.clear(this)')
}

function emit(e) {
  console.log(e)
  const radios = e.closest('.radios').childNodes
  for (const radio of radios) {
    if (radio.classList) {
      const btn = radio.childNodes[1]
      btn.checked = false
    }
  }
  e.checked = true
}

function toggle(e) {
  console.log(e)
}

ripple()