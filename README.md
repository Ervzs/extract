# e-Xtract

A web app that finds the parts inside an opened device from a photo, then shows how to remove each one safely.

This is a solo project. The YOLO11 models it uses were fine-tuned by my thesis group, which I was part of.

Pick a device, pick a photo, and you get a box around each part it finds, a cropped picture of the part, any hazard to watch out for, and the steps to take it out.

Everything runs in the browser with onnxruntime-web, so there's no server and your photo never leaves your device.

Built with React, TypeScript, Vite, Tailwind, shadcn/ui and TanStack Query.

## Models

Four YOLO11 object detection models, fine-tuned by our thesis group on photos of opened devices. I exported them to ONNX so they run in the browser.

| Model | Base | Parts |
|---|---|---|
| Smartphone | YOLO11s | speaker, battery, board, camera, charging port, vibration motors |
| Laptop | YOLO11s | battery, fan, hard drive, keyboard, RAM, screws, SSDs, Wi-Fi card |
| Computer | YOLO11m | HDD, SSDs, case, CMOS battery, cooler, CPU, fan, GPU, motherboard, PSU, RAM |
| Telecom | YOLO11s | antenna, phone board, phone speaker, router board |
