function switchDesktop(orientation) {
    let cur = workspace.currentDesktop;

    if (orientation === 'horizontal') {
        if (cur === 1) workspace.currentDesktop = 2;
        else if (cur === 2) workspace.currentDesktop = 1;
        else if (cur === 3) workspace.currentDesktop = 4;
        else if (cur === 4) workspace.currentDesktop = 3;
    } else {
        if (cur === 1) workspace.currentDesktop = 3;
        else if (cur === 2) workspace.currentDesktop = 4;
        else if (cur === 3) workspace.currentDesktop = 1;
        else if (cur === 4) workspace.currentDesktop = 2;
    }
}

// This assumes you have a 2x2 desktop grid 
registerShortcut('SwitchDesktopsHorizontal', 'Switch Desktops Horizontally', '', function () { switchDesktop('horizontal'); });
registerShortcut('SwitchDesktopsVertical', 'Switch Desktops Vertically', '', function () { switchDesktop('vertical'); });
