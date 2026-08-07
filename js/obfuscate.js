mail_link = document.getElementById("obfuscated")
var name = 'akira'
var thing = 'epac'
var device = 'comptuter'

var post = name.substring(1) + '@' + thing.split('').reverse().join('') + name.substring(1) + '.' + device.slice(0,3)

mail_link.innerHTML = post
mail_link.href = Object.keys({mail_link})[0].substring(0,4) + 'to:' + post