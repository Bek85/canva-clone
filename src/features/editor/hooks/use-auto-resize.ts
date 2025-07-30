import { useCallback, useEffect } from "react";
import * as fabric from "fabric";

interface UseAutoResizeProps {
  canvas: fabric.Canvas | null;
  container: HTMLDivElement | null;
}

export const useAutoResize = ({ canvas, container }: UseAutoResizeProps) => {
  const autoZoom = useCallback(async () => {
    if (!canvas || !container) {
      return;
    }

    const width = container.offsetWidth;
    const height = container.offsetHeight;

    canvas.setDimensions({ width, height });

    const center = canvas.getCenterPoint();
    const zoomRatio = 0.85;

    const localWorkspace = canvas
      .getObjects()
      .find((object) => object.get("name") === "clip");

    if (!localWorkspace) {
      return;
    }

    const scale = fabric.util.findScaleToFit(localWorkspace, {
      width: width,
      height: height,
    });

    const zoom = zoomRatio * scale;
    canvas.setViewportTransform([...fabric.iMatrix]);
    canvas.zoomToPoint(new fabric.Point(center.x, center.y), zoom);

    const workspaceCenter = localWorkspace.getCenterPoint();
    const viewportTransform = canvas.viewportTransform;

    if (
      canvas.width === undefined ||
      canvas.height === undefined ||
      !viewportTransform
    ) {
      return;
    }

    viewportTransform[4] =
      canvas.width / 2 - workspaceCenter.x * viewportTransform[0];

    viewportTransform[5] =
      canvas.height / 2 - workspaceCenter.y * viewportTransform[3];

    canvas.setViewportTransform(viewportTransform);

    const cloned = await localWorkspace.clone();
    canvas.clipPath = cloned;
    canvas.renderAll();
  }, [canvas, container]);

  useEffect(() => {
    let resizeObserver: ResizeObserver | null = null;

    if (canvas && container) {
      resizeObserver = new ResizeObserver(() => {
        autoZoom();
      });

      resizeObserver.observe(container);
    }

    return () => {
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [canvas, container, autoZoom]);
};
