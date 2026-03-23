import { motion } from 'framer-motion';

const PageHeader = ({ title, subtitle, bgImage }) => {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-navy-blue">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        {bgImage && (
          <img 
            src={bgImage} 
            alt={title} 
            className="w-full h-full object-cover opacity-20"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-blue/50 via-navy-blue to-navy-blue"></div>
      </div>

      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-soft-teal/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-soft-teal/5 rounded-full blur-3xl -ml-48 -mb-48"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            {title}
          </h1>
          <div className="w-20 h-1.5 bg-soft-teal mx-auto mb-8 rounded-full"></div>
          {subtitle && (
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>

      {/* Breadcrumb style indicator */}
      <div className="absolute bottom-0 left-0 w-full py-4 border-t border-white/5 bg-black/10">
        <div className="container mx-auto px-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
          <span>Home</span>
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-soft-teal">{title}</span>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
