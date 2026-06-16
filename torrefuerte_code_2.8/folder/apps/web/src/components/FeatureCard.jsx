import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

function FeatureCard({ icon: Icon, title, description, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <CardHeader>
          <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
            <Icon className="w-7 h-7 text-accent" />
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardHeader>
        
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default FeatureCard;