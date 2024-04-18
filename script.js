const sounds = ['applause','boo','gasp','tada','victory','wrong']

sounds.forEach(sound => {
    // looping through sounds and for each sound running a function
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound
    // the innerText will set the text of the html
    //  button to Whatever text i have as the sound for that button.

    btn.addEventListener('click', () => {
        stopSongs()
        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn)
    // getting elements that have a id of 'buttons' in html.

})

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0
    })
}