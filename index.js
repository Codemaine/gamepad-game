var gamepads = navigator.getGamepads();
var player = document.getElementById('player');
var left = 0
var walker = [];
            var curWalker = 0;
            var startWalking;
            for(var i=1; i<3; i++) {
                walker[i] = new Image();
                walker[i].src = "walk"+i+".png";
            }

            function marathon() {
                if(curWalker == 5)
                    curWalker = 0;
                else
                    ++curWalker;
                let tag = document.getElementById("player")
                tag.src = walker[curWalker].src;
            }
            function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

window.addEventListener("gamepadconnected", event => {
    console.log("gamepad connected");
    console.log(event.gamepad);
    const update = () => {
        if(navigator.getGamepads()[0].buttons[0].pressed){
        console.log("x clicked");
        }
        if(navigator.getGamepads()[0].buttons[1].pressed){
            console.log("o clicked");
            }
        if(navigator.getGamepads()[0].buttons[2].pressed){
                console.log("☐ clicked");
            }
        if(navigator.getGamepads()[0].buttons[3].pressed){
            console.log("▲ clicked");
        }
        if(navigator.getGamepads()[0].axes[1] === -1.00000){
            console.log("up");
        }
        if(navigator.getGamepads()[0].axes[1] === 1.00000){
            console.log("down");
        }
        if(navigator.getGamepads()[0].axes[0] === -1.00000){
            console.log("left");
            if(left <= 0){
                left += 2;
        }
            player.src = "back2.png"
            sleep(1).then(() => player.src = "back1.png")
            left -=2
            player.style.left = left + "px"

        }
        if(navigator.getGamepads()[0].axes[0] === 1.00000){
            console.log("right");
            if(left >= 576){
                left -= 2
            }
            player.src = "walk2.png"
            sleep(1).then(() => player.src = "walk1.png")
            left +=2
            player.style.left = left + "px"
        }
        if(navigator.getGamepads()[0].buttons[5].pressed){
            console.log("jump");
        }
        if(navigator.getGamepads()[0].buttons[4].pressed){
            console.log("attack");
        }
        if(navigator.getGamepads()[0].axes[3] === -1.00000){
            console.log("second-up");
        }
        if(navigator.getGamepads()[0].axes[3] === 1.00000){
            console.log("second-down");
        }
        if(navigator.getGamepads()[0].axes[2] === -1.00000){
            console.log("second-left");
        }
        if(navigator.getGamepads()[0].axes[2] === 1.00000){
            console.log("second-right");
        }
        if(navigator.getGamepads()[0].buttons[9].pressed){
            console.log("paused");
        }
        if(navigator.getGamepads()[0].buttons[8].pressed){
            console.log("game ended");
        }
        requestAnimationFrame(update)
    }
    update();
})