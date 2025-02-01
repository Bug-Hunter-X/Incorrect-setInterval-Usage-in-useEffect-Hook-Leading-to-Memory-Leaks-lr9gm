```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect way to use setInterval
    setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    return () => clearInterval(setInterval); // This won't work correctly
  }, []);

  return <div>Count: {count}</div>;
}
```