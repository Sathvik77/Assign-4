const rwv = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getTTFB, getFID, getFCP, getLCP}) => {
      getCLS(onPerfEntry); getTTFB(onPerfEntry); getFID(onPerfEntry); getFCP(onPerfEntry); getLCP(onPerfEntry);
    });
  }
};

export default rwv;
