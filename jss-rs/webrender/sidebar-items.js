initSidebarItems({"constant":[["MAX_VERTEX_TEXTURE_WIDTH",""]],"enum":[["ChasePrimitive",""],["ExternalImageSource",""],["GraphicsApi",""],["RendererKind",""]],"fn":[["intersect_for_tile",""]],"mod":[["api",""]],"static":[["WEBRENDER_RECORDING_HEADER",""]],"struct":[["BinaryRecorder",""],["CpuProfile",""],["DebugFlags",""],["ExternalImage","The data that an external client should provide about an external image. The timestamp is used to test if the renderer should upload new texture data this frame. For instance, if providing video frames, the application could call wr.render() whenever a new video frame is ready. If the callback increments the returned timestamp for a given image, the renderer will know to re-upload the image data to the GPU. Note that the UV coords are supplied in texel-space!"],["GpuProfile",""],["GraphicsApiInfo",""],["PipelineInfo",""],["ProgramBinary",""],["ProgramCache",""],["ProgramSources",""],["Renderer","The renderer is responsible for submitting to the GPU the work prepared by the RenderBackend."],["RendererOptions",""],["RendererStats",""]],"trait":[["ApiRecordingReceiver",""],["AsyncPropertySampler","Allows callers to hook into the main render_backend loop and provide additional frame ops for generate_frame transactions. These functions are all called from the render backend thread."],["ExternalImageHandler","The interfaces that an application can implement to support providing external image buffers. When the the application passes an external image to WR, it should kepp that external image life time. People could check the epoch id in RenderNotifier at the client side to make sure that the external image is not used by WR. Then, do the clean up for that external image."],["OutputImageHandler","Allows callers to receive a texture with the contents of a specific pipeline copied to it. Lock should return the native texture handle and the size of the texture. Unlock will only be called if the lock() call succeeds, when WR has issued the GL commands to copy the output to the texture handle."],["ProgramCacheObserver","The interfaces that an application can implement to handle ProgramCache update"],["SceneBuilderHooks","Allows callers to hook in at certain points of the async scene build. These functions are all called from the scene builder thread."],["ThreadListener",""]]});