var gamepads = navigator.getGamepads();
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
        }
        if(navigator.getGamepads()[0].axes[0] === 1.00000){
            console.log("right");
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