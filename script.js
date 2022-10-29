function out(text, color, background) {
  if (!background) background = 'transparent'
  console.log(`%c${text}`, `color: ${color}; background: ${background}; font-size: 32px;`);
}

out('INT FRACT', '#5865f2')

function ripple() {
  const buttons = document.querySelectorAll('button.btn')
  const anchors = document.querySelectorAll('a.btn')

  for (const button of buttons) {
    pulse(button)
  }

  for (const a of anchors) {
    pulse(a)
  }
}

function pulse(e) {
  let color = '#2f3136'
  for (const item of e.classList) {
    if (item.startsWith('pulse-')) {
      color = `#${item.split('-')[1]}`
    }
  }
  e.setAttribute('onpointerdown', `ripplet(arguments[0], { clearing: false, color: "${color}" })`)
  e.setAttribute('onpointerup', 'ripplet.clear(this)')
  e.setAttribute('onpointerleave', 'ripplet.clear(this)')
}

ripple()