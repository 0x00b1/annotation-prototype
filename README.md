annotation-prototype (Unmaintained)
===================================

A web application for creating instance segmentation annotations.

**This application was a prototype and is unmaintained.** You shouldn’t use this.

Use
---

Prepare a JSON file that looks like the following:

```json
    {
      "categories": [
        "foo",
        "bar",
        "baz"
      ],
      "images": [
        "images/1.png",
        "images/2.png",
        "images/3.png",
      ],
      "annotations": [
        "annotations/1.png",
        "annotations/2.png",
        "annotations/3.png",
      ]
    }
```

Open your browser and visit `index.html`.
