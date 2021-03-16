use AppleScript version "2.4"
use framework "AppKit"
use scripting additions

property NSWorkspace : class "NSWorkspace"

on run
    set workSp to NSWorkspace's sharedWorkspace()
    set notifCent to workSp's notificationCenter()
    tell notifCent to addObserver:me selector:"activeAppHasChanged:" |name|:"NSWorkspaceDidActivateApplicationNotification" object:(missing value)
end run

on idle
    -- we don't use the idle loop, so tell the system let the app sleep. this comes out of idle once an hour
    return 3600
end idle

on activeAppHasChanged:notif
    set targetApp to (notif's userInfo's valueForKey:"NSWorkspaceApplicationKey")
    set targetAppName to (targetApp's localizedName) as text
    tell application "System Events"
        tell process targetAppName
            try
                set {xpos, ypos} to position of first window
                set {w, h} to size of first window
                my mouseMove(xpos + w / 2, ypos + h / 2)
            end try
        end tell
    end tell
end activeAppHasChanged:

on mouseMove(newX, newY)
    do shell script "

/usr/bin/python <<END

from Quartz.CoreGraphics import CGEventCreateMouseEvent
from Quartz.CoreGraphics import CGEventPost
from Quartz.CoreGraphics import kCGMouseButtonLeft
from Quartz.CoreGraphics import kCGHIDEventTap
from Quartz.CoreGraphics import kCGEventMouseMoved
import time

def mouseEvent(posx, posy):
          theEvent = CGEventCreateMouseEvent(None, kCGEventMouseMoved, (posx,posy), kCGMouseButtonLeft)
          CGEventPost(kCGHIDEventTap, theEvent)

mouseEvent(" & newX & "," & newY & ");

END"
end mouseMove