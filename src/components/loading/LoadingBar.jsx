export default function LoadingBar({progress, message = null}) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.6)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      {message && (
        <div
          style={{
            marginBottom: 8,
            fontSize: 18,
            fontWeight: 600,
            color: "#f8f8f8",
            textAlign: "center",
          }}
        >
          {message}
        </div>
      )}
      <div style={{marginBottom: 12, fontSize: 16, fontWeight: "bold", color: "#fff"}}>
        {progress} %
      </div>
      <div
        style={{
          width: "20%",
          height: 10,
          background: "rgba(255,255,255,.2)",
          borderRadius: 9999,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            // background: "linear-gradient(90deg,#3b82f6,#06b6d4)", // blue
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
            transition: "width .2s ease",
          }}
        />
      </div>
    </div>
  )
};