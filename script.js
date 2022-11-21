function out(text, color, background) {
  if (!background) background = 'transparent'
  console.log(`%c${text}`, `color: ${color}; background: ${background}; font-size: 32px;`);
}

async function nav() {
  const html = await fetch('/widgets/nav.html').then(data => data.text())
  document.getElementById('navigation').innerHTML = html
}

function ripple() {
  const buttons = document.querySelectorAll('.btn:not(.btn:disabled)')

  for (const button of buttons) {
    pulse(button)
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
  console.log(e.value)
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
  console.log(e.value)
}

function fields() {
  const forms = document.querySelectorAll('form')
  for (const form of forms) {
    form.setAttribute('novalidate', '')
    form.addEventListener('submit', e => e.preventDefault())
  }
}

out('INT FRACT', '#5865f2')
nav()
ripple()
fields()