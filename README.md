# REACT CONTENT SIDEPANEL

A ReactJS 18+ Content Sidepanel component...

Unlike Offcanvas sidemenu, this panel does not cover the whole window height, but only its parent container height.
This sidepanel is perfect for contextual menu/options.

## USAGE

```
  import Sidepanel from 'Sidepanel';
  
  const App = () => {
    return
      <div className="parentContainer">
        <Sidepanel side="left" width="240">
          ...left sidepanel elements...
        </Sidepanel>
        <div className="content">
          ...
        </div>
        <Sidepanel side="right" width="200">
          ...right sidepanel elements...
        </Sidepanel>
      </div>
  }
```

## SETTINGS

#### side
The side the sidepanel will be sticked to.
Possible values : "left" or "right"
Default value : "right"

#### width
The sidepanel width.
Value : an integer between 200 and the parent container width...
Default value : 240

#### openedInit
The initial state of sidepanel (when it is mounted).
Value : true  => opened when mounted
        false => closed when mounted
Default value : false

#### togglerMode
The sidepanel toggler icons set.
Values : "arrows", "context", "info"
Default value : "arrows"

#### shadow
The sidepanel shadow.
Values : true or false
Default value : false

## MAIN TECHNOLOGIES IMPLEMENTED

<table style="width: 100%; border-collapse: collapse; border: none;">
  <tbody>
    <tr style="border: none; text-align: center;">
      <td align="center" style="padding: 30px 20px; border: none;">
        <div style="font-size: 1.2rem; font-weight: bold;">ReactJS<br />18.2</div>
      </td>
    </tr>
  </tbody>
</table>
