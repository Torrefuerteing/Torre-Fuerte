import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

function CaseStudyCard({ beforeImage, afterImage, title, description, results, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative">
            <img 
              src={beforeImage} 
              alt={`${title} - antes`}
              className="w-full h-64 md:h-full object-cover"
            />
            <Badge className="absolute top-4 left-4 bg-black/70 text-white">
              Antes
            </Badge>
          </div>
          
          <div className="relative">
            <img 
              src={afterImage} 
              alt={`${title} - después`}
              className="w-full h-64 md:h-full object-cover"
            />
            <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
              Después
            </Badge>
          </div>
        </div>
        
        <CardHeader>
          <CardTitle className="text-2xl">{title}</CardTitle>
        </CardHeader>
        
        <CardContent>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            {description}
          </p>
          
          {results && results.length > 0 && (
            <div className="space-y-2">
              <p className="font-semibold text-sm uppercase tracking-wide text-accent">
                Resultados
              </p>
              <ul className="space-y-1">
                {results.map((result, idx) => (
                  <li key={idx} className="text-sm flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default CaseStudyCard;