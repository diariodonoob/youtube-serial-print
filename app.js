const serialport = require('serialport');

const port = new serialport('/dev/tty.usbmodem1411')

port.on('open', (err) => {

    if (err) console.log(err)

    const imprimir = `Testando Impressão na bematech no canal do diario do noob \n\n\n\n`

    port.write(imprimir)

})

port.on('error', (err) => console.log(err))