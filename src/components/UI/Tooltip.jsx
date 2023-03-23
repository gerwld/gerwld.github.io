import { useState } from "react";
import { useFloating, autoUpdate, offset, flip, shift, useHover, useFocus, useDismiss, useRole, useInteractions, FloatingPortal } from "@floating-ui/react";

import "./styles.css";

function Tooltip() {
 const [isOpen, setIsOpen] = useState(false);

 const { x, y, refs, strategy, context } = useFloating({
  open: isOpen,
  onOpenChange: setIsOpen,
  placement: "top",
  // Make sure the tooltip stays on the screen
  whileElementsMounted: autoUpdate,
  middleware: [
   offset(5),
   flip({
    fallbackAxisSideDirection: "start",
   }),
   shift(),
  ],
 });

 // Event listeners to change the open state
 const hover = useHover(context, { move: false });
 const focus = useFocus(context);
 const dismiss = useDismiss(context);
 // Role props for screen readers
 const role = useRole(context, { role: "tooltip" });

 // Merge all the interactions into prop getters
 const { getReferenceProps, getFloatingProps } = useInteractions([hover, focus, dismiss, role]);

 return (
  <>
   <button ref={refs.setReference} {...getReferenceProps()}>
    Hover or focus me
   </button>
   <FloatingPortal>
    {isOpen && (
     <div
      className="Tooltip"
      ref={refs.setFloating}
      style={{
       // Positioning styles
       position: strategy,
       top: y ?? 0,
       left: x ?? 0,
      }}
      {...getFloatingProps()}
     >
      I'm a tooltip!
     </div>
    )}
   </FloatingPortal>
  </>
 );
}

export default Tooltip;
