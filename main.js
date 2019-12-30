var canvas, ctx, image

image = new Image();
// image.setAttribute('crossOrigin', 'Anonymous');
image.src = "./bg.png"


window.onload = function () {
    canvas = document.getElementById("canvas")
    ctx = canvas.getContext('2d')

    ctx.drawImage(image, 0, 0)
    ctx.style = 'rgb(255, 255,255)'
    ctx.fillRect(0, 0, 120, 120)
}

function getData() {
    var new_canvas = document.createElement('canvas')
    new_canvas.width = 320
    new_canvas.height = 320
    var new_ctx = new_canvas.getContext('2d')

    var img_data = ctx.getImageData(0, 0, 320, 320)
    new_ctx.putImageData(img_data, 0, 0)

    var dataUrl = new_canvas.toDataURL()
    console.log(dataUrl)
    return dataUrl;
}